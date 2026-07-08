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
  ChevronDown,
  Target
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
export const TargetIcon = createLucideIcon(Target);

// --- SOCIAL ICONS (Keeping original SVGs for specific branding) ---
export const FacebookIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

export const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.448L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.806-9.791.002-2.62-1.02-5.086-2.879-6.95C16.34 2.001 13.9 1.002 12.01 1.002c-5.402 0-9.802 4.382-9.806 9.793-.001 1.57.415 3.102 1.208 4.478l-.995 3.634 3.738-.981zM17.15 14.54c-.294-.147-1.74-.859-2.01-.956-.27-.099-.467-.147-.662.147-.196.294-.759.956-.931 1.152-.172.196-.344.221-.638.074-.294-.147-1.243-.458-2.37-1.464-.877-.782-1.47-1.747-1.642-2.041-.172-.294-.018-.454.13-.601.133-.131.294-.343.441-.515.147-.172.196-.294.294-.49.098-.196.049-.368-.025-.515-.074-.147-.662-1.595-.907-2.183-.239-.575-.483-.497-.662-.506-.171-.007-.368-.009-.564-.009-.196 0-.515.074-.784.368-.27.294-1.03 1.006-1.03 2.454 0 1.449 1.054 2.846 1.202 3.042.147.196 2.074 3.167 5.023 4.44.701.303 1.249.484 1.675.62.705.224 1.346.193 1.853.117.564-.084 1.74-.711 1.985-1.396.246-.686.246-1.274.172-1.396-.073-.122-.27-.196-.564-.343z"/>
  </svg>
);

export const ButterflyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
  </svg>
);
