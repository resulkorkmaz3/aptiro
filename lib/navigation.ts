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
  
  // Handle home page navigation
  if (href === '/') {
    window.location.href = '/';
    return;
  }
  
  // Handle /about page - go to actual about page
  if (href === '/about') {
    window.location.href = '/about';
    return;
  }
  
  // Handle hash navigation - only if we're already on home page
  if (href.startsWith('/#')) {
    const sectionId = href.substring(2); // Remove /#
    
    // If we're on home page, just scroll
    if (window.location.pathname === '/') {
      setTimeout(() => {
        smoothScrollToSection(sectionId);
      }, 100);
    } else {
      // If we're on another page, navigate to home with hash
      window.location.href = href;
    }
    return;
  }
  
  // Handle service pages - these should go to actual pages
  if (href.startsWith('/services/')) {
    window.location.href = href;
    return;
  }
  
  // Handle other routes that should redirect to homepage sections
  const routeMapping: { [key: string]: string } = {
    '/contact': 'contact',
    '/portfolio': 'services',
    '/services': 'services'
  };
  
  const sectionId = routeMapping[href];
  if (sectionId) {
    // Always navigate to home page with hash for these routes
    window.location.href = '/#' + sectionId;
  } else {
    // Fallback to normal navigation
    window.location.href = href;
  }
};
