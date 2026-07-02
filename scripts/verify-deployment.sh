#!/bin/bash

# ============================================
# UUHT 联盟链接追踪系统 - 部署验证脚本
# ============================================

echo "🔍 UUHT 联盟链接追踪系统 - 部署验证"
echo "======================================"
echo ""

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查项计数器
PASS=0
FAIL=0
WARN=0

# 测试函数
test_endpoint() {
    local name=$1
    local url=$2
    local expected_status=${3:-200}
    
    echo -n "测试 $name ... "
    
    # 使用 curl 测试，超时5秒
    response=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 "$url" 2>/dev/null)
    curl_exit=$?
    
    if [ $curl_exit -ne 0 ]; then
        echo -e "${RED}❌ 连接失败${NC}"
        FAIL=$((FAIL + 1))
        return 1
    fi
    
    if [ "$response" = "$expected_status" ]; then
        echo -e "${GREEN}✅ 通过 (HTTP $response)${NC}"
        PASS=$((PASS + 1))
        return 0
    else
        echo -e "${YELLOW}⚠️  HTTP $response (期望 $expected_status)${NC}"
        WARN=$((WARN + 1))
        return 1
    fi
}

check_env_var() {
    local name=$1
    local value=$2
    
    echo -n "检查环境变量 $name ... "
    
    if [ -z "$value" ]; then
        echo -e "${RED}❌ 未设置${NC}"
        FAIL=$((FAIL + 1))
        return 1
    else
        echo -e "${GREEN}✅ 已设置${NC}"
        PASS=$((PASS + 1))
        return 0
    fi
}

echo "📋 开始验证..."
echo ""

# 1. 检查环境变量（如果存在 .env.local）
echo "--- 环境变量检查 ---"
if [ -f ".env.local" ]; then
    source .env.local
    check_env_var "NEXT_PUBLIC_SUPABASE_URL" "$NEXT_PUBLIC_SUPABASE_URL"
    check_env_var "NEXT_PUBLIC_SUPABASE_ANON_KEY" "$NEXT_PUBLIC_SUPABASE_ANON_KEY"
else
    echo -e "${YELLOW}⚠️  未找到 .env.local 文件（如果在 Vercel 部署则正常）${NC}"
    WARN=$((WARN + 1))
fi
echo ""

# 2. 测试网站可访问性
echo "--- 网站可访问性测试 ---"
BASE_URL="https://www.uuht.shop"
test_endpoint "主页" "$BASE_URL" "200"
test_endpoint "管理后台" "$BASE_URL/admin/links" "200"
test_endpoint "数据看板" "$BASE_URL/admin/stats" "200"
echo ""

# 3. 测试 API 端点
echo "--- API 端点测试 ---"
test_endpoint "Links API" "$BASE_URL/api/links" "200"
test_endpoint "Stats API" "$BASE_URL/api/stats" "200"
echo ""

# 4. 测试短链接跳转
echo "--- 短链接跳转测试 ---"
test_endpoint "示例短链接" "$BASE_URL/go/air-fryer" "302"
echo ""

# 5. 总结
echo "======================================"
echo "📊 验证结果总结"
echo "======================================"
echo -e "${GREEN}✅ 通过: $PASS${NC}"
echo -e "${YELLOW}⚠️  警告: $WARN${NC}"
echo -e "${RED}❌ 失败: $FAIL${NC}"
echo ""

if [ $FAIL -eq 0 ]; then
    echo -e "${GREEN}🎉 所有测试通过！系统部署成功！${NC}"
    echo ""
    echo "🚀 下一步："
    echo "   1. 访问管理后台: https://uuht.shop/admin/links"
    echo "   2. 添加您的第一个联盟链接"
    echo "   3. 开始推广并追踪点击数据"
else
    echo -e "${RED}⚠️  部分测试失败，请检查上述错误信息${NC}"
    echo ""
    echo "💡 常见问题排查："
    echo "   1. 确认 Vercel 环境变量已正确配置"
    echo "   2. 确认 Supabase SQL 脚本已成功执行"
    echo "   3. 等待 Vercel 部署完成（通常需要 1-2 分钟）"
fi
echo ""
