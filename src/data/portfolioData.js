import {
    Search, Share2, MousePointerClick, Palette, FileText,
    Award, BookOpen, TrendingUp, Users, Target, Zap,
    Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Command
} from "lucide-react";

export const heroData = {
    title: "Transform Your Brand",
    subtitle: "We craft data-driven digital marketing strategies that elevate your business and drive real results in the modern landscape."
};

export const navbarData = {
    logo: {
        text: "Portfolio.",
        icon: Command,
    },
    links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Clients", href: "#clients" },
        { name: "Certificates", href: "#certificates" },
        { name: "Contact", href: "#contact" },
    ]
};

export const valuesData = [
    {
        icon: Target,
        title: "Results-Driven",
        description: "We focus on measurable outcomes that impact your bottom line.",
    },
    {
        icon: Users,
        title: "Client-Centered",
        description: "Your success is our priority. We build lasting partnerships.",
    },
    {
        icon: Zap,
        title: "Innovation First",
        description: "We stay ahead with cutting-edge strategies and technologies.",
    },
];

export const servicesData = [
    {
        icon: Search,
        title: "SEO",
        description: "Boost your search rankings and drive organic traffic with our proven SEO strategies.",
        gradient: "from-purple-500 to-purple-700",
    },
    {
        icon: Share2,
        title: "Social Media Marketing",
        description: "Engage your audience and build community with compelling social media campaigns.",
        gradient: "from-pink-500 to-pink-700",
    },
    {
        icon: MousePointerClick,
        title: "Paid Ads",
        description: "Maximize ROI with targeted PPC campaigns across Google, Facebook, and LinkedIn.",
        gradient: "from-blue-500 to-blue-700",
    },
    {
        icon: Palette,
        title: "Branding",
        description: "Create a memorable brand identity that resonates with your target audience.",
        gradient: "from-indigo-500 to-indigo-700",
    },
    {
        icon: FileText,
        title: "Content Marketing",
        description: "Tell your story with strategic content that educates, engages, and converts.",
        gradient: "from-violet-500 to-violet-700",
    },
];

export const clientsData = {
    logos: [
        { name: "TechCorp", bg: "from-blue-500 to-cyan-500" },
        { name: "Innovate", bg: "from-purple-500 to-pink-500" },
        { name: "GrowthLab", bg: "from-green-500 to-emerald-500" },
        { name: "DigitalX", bg: "from-orange-500 to-red-500" },
        { name: "CloudFlow", bg: "from-indigo-500 to-purple-500" },
        { name: "BrandWise", bg: "from-pink-500 to-rose-500" },
    ],
    testimonials: [
        {
            quote: "Working with this team has been transformative for our business. Our organic traffic increased by 300% in just 6 months!",
            author: "Sarah Johnson",
            position: "CEO, TechCorp",
            image: "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODc0NTAzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
            quote: "The ROI from their PPC campaigns exceeded our expectations. Professional, data-driven, and results-focused.",
            author: "Michael Chen",
            position: "Marketing Director, Innovate",
            image: "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg3NjgyODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
            quote: "Their creative approach to social media marketing helped us double our engagement and build a loyal community.",
            author: "Emily Rodriguez",
            position: "Founder, GrowthLab",
            image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODgwNjY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
        },
    ]
};

export const certificatesData = [
    {
        icon: Award,
        title: "Google Ads Certified",
        issuer: "Google",
        year: "2024",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: BookOpen,
        title: "HubSpot Inbound Marketing",
        issuer: "HubSpot Academy",
        year: "2024",
        color: "from-orange-500 to-red-500",
    },
    {
        icon: TrendingUp,
        title: "Meta Blueprint Certified",
        issuer: "Meta",
        year: "2023",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: Users,
        title: "LinkedIn Marketing Expert",
        issuer: "LinkedIn",
        year: "2023",
        color: "from-indigo-500 to-blue-600",
    },
];

export const contactData = {
    info: [
        {
            icon: Mail,
            label: "Email",
            value: "hello@marketingpro.com",
            color: "from-purple-500 to-purple-700",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+1 (555) 123-4567",
            color: "from-pink-500 to-pink-700",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "San Francisco, CA",
            color: "from-blue-500 to-blue-700",
        },
    ],
    socials: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
    ]
};