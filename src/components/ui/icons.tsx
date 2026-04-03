import React from 'react';
import { 
  Heart, 
  Key, 
  Sparkles, 
  Hash, 
  Layers, 
  Wind, 
  MessageSquare, 
  X, 
  Send, 
  Feather, 
  Scale, 
  Star, 
  MapPin, 
  Globe, 
  Phone, 
  Calendar, 
  Mail, 
  Briefcase, 
  Compass,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Quote,
  CheckCircle2,
  Users,
  Leaf,
  Clock,
  ChevronDown
} from 'lucide-react';

// --- WRAPPER FOR LUCIDE ICONS (Ensures consistent strokeWidth and sizing) ---
const createLucideIcon = (IconComponent: any) => ({ className = "w-6 h-6", style }: { className?: string; style?: React.CSSProperties }) => (
  <IconComponent className={className} style={style} strokeWidth={1.5} />
);

// Lucide Mappings
export const HeartHandIcon = createLucideIcon(Heart);
export const KeyIcon = createLucideIcon(Key);
export const SparklesIcon = createLucideIcon(Sparkles);
export const NumerologyIcon = createLucideIcon(Hash);
export const HashIcon = NumerologyIcon;
export const CartomancyIcon = createLucideIcon(Layers);
export const LayersIcon = CartomancyIcon;
export const LahochiIcon = createLucideIcon(Wind);
export const WavesIcon = LahochiIcon;
export const CompassIcon = createLucideIcon(Compass);
export const AdventureIcon = CompassIcon;
export const ChatBubbleIcon = createLucideIcon(MessageSquare);
export const CloseIcon = createLucideIcon(X);
export const SendIcon = createLucideIcon(Send);
export const FeatherIcon = createLucideIcon(Feather);
export const BalanceIcon = createLucideIcon(Scale);
export const StarIcon = createLucideIcon(Star);
export const MapPinIcon = createLucideIcon(MapPin);
export const GlobeIcon = createLucideIcon(Globe);
export const PhoneIcon = createLucideIcon(Phone);
export const CalendarIcon = createLucideIcon(Calendar);
export const MailIcon = createLucideIcon(Mail);
export const BriefcaseIcon = createLucideIcon(Briefcase);
export const ArrowRightIcon = createLucideIcon(ArrowRight);
export const ArrowLeftIcon = createLucideIcon(ArrowLeft);
export const ChevronRightIcon = createLucideIcon(ChevronRight);
export const QuoteIcon = createLucideIcon(Quote);
export const CheckIcon = createLucideIcon(CheckCircle2);
export const UsersIcon = createLucideIcon(Users);
export const NaturalIcon = createLucideIcon(Leaf);
export const LeafIcon = NaturalIcon;
export const ClockIcon = createLucideIcon(Clock);
export const ChevronDownIcon = createLucideIcon(ChevronDown);

// --- SOCIAL ICONS (Keeping original SVGs for specific branding) ---
export const FacebookIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

export const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.74.44 3.37 1.23 4.78L2 22l5.33-1.38c1.37.71 2.93 1.11 4.58 1.11h.01c5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.82-9.91-9.82zM17.2 15.25c-.21 0-.46-.07-.72-.18-.54-.22-1.04-.54-1.2-.72-.15-.17-.28-.36-.42-.53-.13-.17-.28-.34-.42-.51s-.29-.34-.44-.51c-.15-.17-.31-.34-.46-.51-.15-.17-.32-.34-.48-.51s-.32-.34-.49-.51c-.17-.17-.35-.34-.52-.51l-.14-.14s-.14-.14-.28-.28c-.14-.14-.28-.28-.42-.42s-.28-.28-.42-.42-.28-.28-.42-.42l-.14-.14c-.14-.14-.28-.28-.42-.42s-.28-.28-.42-.42-.28-.28-.42-.42c-.28-.28-.56-.56-.84-.84s-.56-.56-.84-.84l-.28-.28c-.28-.28-.56-.56-.84-.84s-.56-.56-.84-.84l-.28-.28c-1.12-1.12-2.24-2.24-3.36-3.36C3.06 6.37 4.1 5.25 4.1 5.25s1.12 1.12 1.12 1.12l.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28c.14.14.28.28.42.42s.28.28.42.42.28.28.42.42.28.28.42.42l.14.14s.14.14.28.28c.14.14.28.28.42.42s.28.28.42.42.28.28.42.42l.14.14c.14.14.28.28.42.42s.28.28.42.42.28.28.42.42c.15.15.29.3.44.44s.29.3.44.44l.14.14c.15.15.29.3.44.44s.29.3.44.44l.14.14c.28.28.56.56.84.84s.56.56.84.84l.28.28c.28.28.56.56.84.84s.56.56.84.84l.28.28c.09.09.18.18.27.27s.18.18.27.27l.14.14c.09.09.18.18.27.27s.18.18.27.27l.14.14c.09.09.18.18.27.27s.18.18.27.27l.14.14c.09.09.18.18.27.27s.18.18.27.27l.14.14c.28.28.56.56.84.84s.56.56.84.84l.28.28c.28.28.56.56.84.84s.56.56.84.84l.28.28c.09.09.18.18.27.27s.18.18.27.27l.14.14c.09.09.18.18.27.27s.18.18.27.27l.14.14c.09.09.18.18.27.27s.18.18.27.27l.14.14c.09.09.18.18.27.27s.18.18.27.27l.14.14c.09.09.18.18.27.27s.18.18.27.27l.1-4.1-3.3-3.3-1.42 1.42z" />
  </svg>
);

export const ButterflyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
  </svg>
);
