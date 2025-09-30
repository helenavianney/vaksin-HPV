# 🚀 Deployment Guide - RISA Vaksin HPV

## 📋 Pre-Deployment Checklist

### ✅ Code Quality
- [ ] All components are responsive
- [ ] No console errors in production
- [ ] All images optimized
- [ ] Meta tags configured
- [ ] Theme color set (#F89BB1)

### ✅ Testing
- [ ] Booking flow works end-to-end
- [ ] Map functionality tested
- [ ] localStorage persistence verified
- [ ] Mobile responsiveness confirmed
- [ ] Cross-browser compatibility checked

## 🌐 Netlify Deployment Steps

### 1. Repository Setup
```bash
# Ensure your code is in Git repository
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Netlify Configuration

#### Build Settings
```yaml
# netlify.toml (optional)
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Manual Setup in Netlify Dashboard
1. **Site Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x

2. **Domain Configuration**
   - Primary domain: `risa-vaksinhpv.netlify.app`
   - SSL: Automatically enabled

### 3. Environment Variables (if needed)
```bash
# In Netlify Dashboard > Site Settings > Environment Variables
NEXT_PUBLIC_SITE_URL=https://risa-vaksinhpv.netlify.app
```

## 🔧 Build Optimization

### Next.js Configuration
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export"
  }
}
```

## 📊 Performance Monitoring

### Netlify Analytics Setup
1. Enable Netlify Analytics in dashboard
2. Monitor Core Web Vitals
3. Track user engagement

### Performance Targets
```
✅ First Contentful Paint: < 1.5s
✅ Largest Contentful Paint: < 2.5s  
✅ Cumulative Layout Shift: < 0.1
✅ First Input Delay: < 100ms
```

## 🔒 Security Configuration

### Headers Configuration
```toml
# netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### HTTPS Enforcement
- Automatically handled by Netlify
- Force HTTPS redirect enabled

## 🚨 Troubleshooting Deployment Issues

### Common Build Errors

1. **Node Version Mismatch**
   ```bash
   # Solution: Set Node version in Netlify
   NODE_VERSION = "18"
   ```

2. **Missing Dependencies**
   ```bash
   # Solution: Check package.json
   npm install --production
   ```

3. **Static Export Issues**
   ```bash
   # Solution: Configure next.config.js
   output: 'export'
   ```

### Runtime Issues

1. **Map Not Loading**
   - Ensure Leaflet CSS is imported
   - Check HTTPS requirement for geolocation

2. **localStorage Errors**
   - Add `typeof window !== 'undefined'` checks
   - Handle SSR gracefully

## 📱 Mobile Testing

### Device Testing Checklist
- [ ] iPhone Safari (iOS 14+)
- [ ] Chrome Mobile (Android 10+)
- [ ] Samsung Internet
- [ ] Firefox Mobile

### Performance on Mobile
- [ ] Map loads within 3 seconds
- [ ] Touch interactions work smoothly
- [ ] Forms are easy to fill
- [ ] Buttons are touch-friendly (44px+)

## 🔄 Continuous Deployment

### Auto-Deploy Setup
1. Connect GitHub/GitLab to Netlify
2. Enable auto-deploy on main branch
3. Set up deploy previews for PRs

### Deploy Hooks
```bash
# Webhook URL for manual deploys
curl -X POST -d {} https://api.netlify.com/build_hooks/YOUR_HOOK_ID
```

## 📈 Post-Deployment Monitoring

### Week 1 Checklist
- [ ] Monitor error rates
- [ ] Check user feedback
- [ ] Verify booking completions
- [ ] Test all user flows

### Monthly Reviews
- [ ] Performance metrics analysis
- [ ] User behavior analytics
- [ ] Security updates
- [ ] Dependency updates

## 🆘 Emergency Procedures

### Rollback Process
1. Go to Netlify Dashboard
2. Navigate to Deploys
3. Click "Publish deploy" on previous version

### Hotfix Deployment
```bash
# Quick fix process
git checkout main
git pull origin main
# Make urgent fix
git add .
git commit -m "hotfix: urgent issue description"
git push origin main
# Auto-deploys via Netlify
```

## 📞 Support Contacts

### Technical Issues
- **Platform**: Netlify Support
- **DNS**: Domain provider support
- **Code**: Development team

### Monitoring Tools
- **Uptime**: Netlify status page
- **Performance**: Lighthouse CI
- **Analytics**: Netlify Analytics

---

**Deployment Date**: September 2025  
**Platform**: Netlify  
**Domain**: risa-vaksinhpv.netlify.app  
**Status**: ✅ Production Ready