export const smoothScrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80; // Header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const handleNavigation = (href: string, callback?: () => void) => {
  // Close mobile menu if callback provided
  if (callback) callback();
  
  // Handle hash navigation
  if (href.startsWith('/#')) {
    const sectionId = href.substring(2); // Remove /#
    smoothScrollToSection(sectionId);
    return;
  }
  
  // Handle regular routes
  if (href === '/') {
    window.location.href = '/';
    return;
  }
  
  // Handle other routes that should go to sections
  const routeMapping: { [key: string]: string } = {
    '/contact': 'contact',
    '/portfolio': 'services',
    '/services': 'services',
    '/services/google-ads': 'services',
    '/services/web-design': 'services',
    '/services/ecommerce': 'services',
    '/about': 'about-preview' // About preview section on homepage
  };
  
  const sectionId = routeMapping[href];
  if (sectionId) {
    smoothScrollToSection(sectionId);
  } else {
    // Fallback to normal navigation
    window.location.href = href;
  }
};
