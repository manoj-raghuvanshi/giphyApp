const deviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
// for checking of mobile device
export const isMobile = () => (deviceRegex.test(navigator.userAgent));
