/* global React */
const { useState } = React;


// Generic UI icons
const I = (paths, vb = "0 0 24 24") => ({ size = 20, color = "currentColor", strokeWidth = 1.6 }) => (
  <svg width={size} height={size} viewBox={vb} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {paths}
  </svg>
);

window.Icon = {
  Search: I(<><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></>),
  Cart: I(<><path d="M3 4h2l2.5 12h11l2-8H6"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></>),
  User: I(<><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></>),
  Heart: I(<path d="M12 21s-7-4.5-9.5-9.5C.5 7 4 3 8 4.5C10 5.2 12 7 12 7s2-1.8 4-2.5C20 3 23.5 7 21.5 11.5C19 16.5 12 21 12 21Z"/>),
  Truck: I(<><rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 9h5l3 4v4h-8"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></>),
  Whatsapp: I(<><path d="M3 21l1.5-5A8 8 0 1 1 8 19.5L3 21Z"/><path d="M9 10c1 3 2 4 5 5"/></>),
  Phone: I(<path d="M5 3h3l2 5-2 1c1 3 3 5 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"/>),
  Mail: I(<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></>),
  Pin: I(<><path d="M12 22s7-7 7-13a7 7 0 1 0-14 0c0 6 7 13 7 13Z"/><circle cx="12" cy="9" r="2.5"/></>),
  Chevron: I(<path d="M9 6l6 6-6 6"/>),
  ChevronDown: I(<path d="M6 9l6 6 6-6"/>),
  ChevronLeft: I(<path d="M15 6l-6 6 6 6"/>),
  Plus: I(<><path d="M12 5v14"/><path d="M5 12h14"/></>),
  Minus: I(<path d="M5 12h14"/>),
  Star: ({ size = 18, color = "currentColor", filled = true }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : "none"} stroke={color} strokeWidth="1.5" strokeLinejoin="round"><polygon points="12,2 15,9 22,10 17,15 18,22 12,18.5 6,22 7,15 2,10 9,9"/></svg>
  ),
  Check: I(<path d="M5 12l5 5L20 7"/>),
  Filter: I(<path d="M3 5h18M6 12h12M10 19h4"/>),
  Grid: I(<><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>),
  List: I(<><path d="M3 6h18M3 12h18M3 18h18"/></>),
  Box: I(<><path d="M3 7l9-4 9 4-9 4-9-4Z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></>),
  Leaf: I(<path d="M5 19c0-7 5-13 14-13c0 9-6 14-13 14c-1 0-1-1-1-1Z M7 17l8-8"/>),
  Drop: I(<path d="M12 3c4 5 7 8.5 7 12a7 7 0 1 1-14 0c0-3.5 3-7 7-12Z"/>),
  Tractor: I(<><circle cx="6" cy="17" r="3"/><circle cx="18" cy="18" r="2"/><path d="M3 17V9h6l3 4h6v5"/><path d="M9 9V6h4"/></>),
  Sprout: I(<><path d="M12 22V10"/><path d="M5 10c2-3 5-3 7 0c2-3 5-3 7 0"/><path d="M12 14c-2-2-2-4 0-6c2 2 2 4 0 6Z"/></>),
  Bag: I(<><path d="M5 8h14l-1 12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></>),
  Package: I(<><path d="M3 7l9-4 9 4v10l-9 4-9-4V7Z"/><path d="M3 7l9 4 9-4M12 11v10"/></>),
  Shield: I(<path d="M12 3l8 3v6c0 5-4 9-8 9s-8-4-8-9V6l8-3Z"/>),
  Calendar: I(<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></>),
  Lock: I(<><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></>),
  Logout: I(<><path d="M16 17l5-5-5-5M21 12H9"/><path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4"/></>),
  Edit: I(<><path d="M4 20h4l11-11-4-4L4 16v4Z"/><path d="M14 5l4 4"/></>),
  Trash: I(<><path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/></>),
  Close: I(<><path d="M6 6l12 12M18 6L6 18"/></>),
  Menu: I(<><path d="M3 6h18M3 12h18M3 18h18"/></>),
  Send: I(<path d="M22 2L11 13M22 2l-7 20l-4-9l-9-4Z"/>),
  Award: I(<><circle cx="12" cy="9" r="6"/><path d="M9 14l-2 7l5-3l5 3l-2-7"/></>),
  Clock: I(<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>),
  CreditCard: I(<><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 11h20"/></>),
  Pix: ({ size = 20, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5L18.5 12 12 18.5 5.5 12 12 5.5z"/></svg>
  ),
  Barcode: I(<><path d="M3 5v14M6 5v14M9 5v14M13 5v14M16 5v14M19 5v14"/></>),
};
