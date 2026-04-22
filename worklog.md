---
Task ID: 1
Agent: Main Agent
Task: Comprehensive fix for treeboxmanila.com - layout, images, animations, buttons

Work Log:
- Analyzed 2 mobile screenshots using VLM to identify exact visual bugs
- Traced root causes: horizontal overflow from decorative elements, ImageReveal clip-path hiding images permanently, aggressive animation values causing jitter, MagneticButton spring transforms hiding buttons on mobile
- Added overflow-x-hidden to html, body, main, and layout container in layout.tsx and globals.css
- Fixed HeroSection: changed grid alignment from items-start to items-center, moved hero image higher with lg:-mt-10 xl:-mt-16, positioned floating badges inside bounds instead of negative offsets
- Fixed HeroSection mobile: removed MagneticButton wrapper for buttons on mobile (uses plain Button instead), ensures "Get a Quote Now" is always visible
- Fixed ServicesGrid images: replaced ImageReveal clip-path animation with simple opacity + transform, added image loading/error states with fallback placeholders, reduced useInView margin from -80px to -50px
- Fixed animation jitter across all components: reduced translate distances (40→30), reduced scale values (0.85→0.9), removed rotateX/rotateY from cardReveal variants, removed perspective from Card3DReveal
- Fixed CTA section: removed MagneticButton wrapper from "Get a Quote Now" button to ensure visibility
- Fixed DirectionalReveal: replaced typeof window check with useState+useEffect pattern for SSR safety
- Added willChange: "transform, opacity" to ScrollReveal, DirectionalReveal, Card3DReveal, ImageReveal components
- Added gpu-accelerated CSS utility class
- Reduced all animation thresholds for earlier triggering (margin -80px → -50px/-40px)
- Build verified passing with no errors

Stage Summary:
- All critical bugs fixed: excess white space, images not loading, button visibility, animation jitter
- Hero image moved higher with better alignment
- All animations smoothed with reduced distances and no clip-path
- Mobile buttons always visible without MagneticButton interference
- Build passes cleanly
