#!/bin/bash

# ============================================
# UUHT Affiliate Tracking System - Deploy Script
# ============================================
# This script helps you deploy the affiliate tracking system

echo " UUHT Affiliate Link Tracking System - Deployment Helper"
echo "=========================================================="
echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  .env.local file not found!"
    echo ""
    echo "Please create .env.local with your Supabase credentials:"
    echo ""
    echo "NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co"
    echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here"
    echo ""
    echo "You can copy from .env.local.example and fill in your values."
    echo ""
    exit 1
fi

echo "✅ Found .env.local file"
echo ""

# Check git status
echo "📦 Checking Git status..."
git status --short

echo ""
read -p "Ready to commit and deploy? (y/n): " confirm

if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "❌ Deployment cancelled"
    exit 0
fi

# Add all changes
echo ""
echo " Adding files to Git..."
git add -A

# Commit
echo " Committing changes..."
git commit -m "Add affiliate link tracking system

- Supabase integration
- Link management API
- Short link redirect with click tracking
- Admin dashboard for links and stats
- Documentation and setup scripts

🤖 Generated with automation"

# Push to GitHub
echo ""
echo "️  Pushing to GitHub..."
git push

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Vercel will now automatically deploy your changes."
    echo ""
    echo " Next Steps:"
    echo "   1. Set up Supabase database (see SETUP_GUIDE.md)"
    echo "   2. Wait for Vercel deployment (~2 minutes)"
    echo "   3. Visit: https://uuht.shop/admin/links"
    echo "   4. Start adding your affiliate links!"
    echo ""
else
    echo ""
    echo "❌ Failed to push to GitHub"
    echo "Please check your Git configuration and try again."
    exit 1
fi
