const deviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
export const isMobile = () => (deviceRegex.test(navigator.userAgent));
