import {
    Search,
    Share2,
    MousePointerClick,
    Palette,
    FileText,
    Award,
    BookOpen,
    TrendingUp,
    Users,
    Target,
    Zap,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Instagram,
    Command,
} from "lucide-react";

import hubspot from '../assets/hubspot.jpeg'
import google from '../assets/google.jpeg'
import pureVida from '../assets/pureVida.jpg'
import SEO_Audit_pureVida from '../assets/pdfs/SEO_Audit_pureVida.pdf'
import keyword_reasearch from "../assets/pdfs/keyword_reaserch.pdf"
import keywordImg from '../assets/keywordImg.png'
import SocialMediaContenCalendar from "../assets/pdfs/SocialMediaContentCalendar.pdf"
import socialMediaCalender from '../assets/socialMediaCalender.png'
import instagramFBpost from '../assets/instagramFBpost.png'
import InstagramFBpostdesigns from '../assets/pdfs/InstagramFBpostdesigns.pdf'
import captionWritingSample from '../assets/pdfs/CaptionWritingSamples.pdf'
import captionWritingImg from '../assets/captionWritingImg.jpg'
import DaysGrowthImg from '../assets/DaysGrowthImg.webp'
import GrowthPdf from '../assets/pdfs/DaysGrowthCampaign.pdf'
import AdBanner from '../assets/pdfs/AdBanners.pdf'
import AdBannerImg from '../assets/AdBannersImg.png'
import AdCopyVar from '../assets/pdfs/GoogleAds-AdCopyVariations.pdf'
import AdCopyVarImg from '../assets/AdCopyVarImg.png'
import AdCampaignArcImg from '../assets/AdCampaiignArcimg.png'
import AdCampaignPdf from '../assets/pdfs/GoogleAdsCampaignArchitecture.pdf'
import BlogArticleImg from '../assets/BlogArticleImg.avif'
import BlogArticlePdf from '../assets/pdfs/BlogArticle.pdf'
import WebsiteLandingPageImg from '../assets/websiteLandingPageImg.jpg'
import WebsiteLandingPage from '../assets/pdfs/WebsiteLandingPage.pdf'
import EmailNewsletterImg from '../assets/EmailNewsletterImg.jpeg'
import EmailNewsletterSample from '../assets/pdfs/EmailNewsletterSamples.pdf'


export const heroData = {
    title: "Transform Your Brand",
    subtitle:
        "We craft data-driven digital marketing strategies that elevate your business and drive real results in the modern landscape.",
};

export const navbarData = {
    logo: {
        text: "Shivam Sharma",
        icon: Command,
    },
    links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Clients", href: "#clients" },
        { name: "Certificates", href: "#certificates" },
        { name: "Contact", href: "#contact" },
    ],
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
        description:
            "We stay ahead with cutting-edge strategies and technologies.",
    },
];

export const servicesData = [
    {
        id: "seo",
        icon: Search, // Fixed typo from 'Searchs'
        title: "SEO",
        description:
            "Boost your search rankings and drive organic traffic with our proven SEO strategies.",
        gradient: "from-purple-500 to-purple-700",
        projects: [
            {
                id: 1,
                title: "Audit Report - Pure Vida",
                description:
                    "Sample SEO audit analyzing technical, on-page, content, and backlink opportunities for an e-commerce brand.",
                image: pureVida,
                pdfUrl:SEO_Audit_pureVida,
            },
            {
                id: 2,
                title: "Keyword Research",
                description:"Targeted keyword research and intent mapping for scalable jewelry brand growth.",
                image:keywordImg,
                pdfUrl:keyword_reasearch,
            },
        ],
    },
    {
        id: "social-media",
        icon: Share2,
        title: "Social Media Marketing",
        description:
            "Engage your audience and build community with compelling social media campaigns.",
        gradient: "from-pink-500 to-pink-700",
        projects: [
            {
                id: 1,
                title: "Social Media Content Calender",
                description:"Multichannel social media planning focused on brand storytelling and product visibility.",
                image:socialMediaCalender,
                pdfUrl:SocialMediaContenCalendar,
            },
            {
                id: 2,
                title: "Instagram FB Post Design",
                description:"Optimized Instagram and Facebook creative assets designed to maximize audience engagement.",
                image:instagramFBpost,
                pdfUrl:InstagramFBpostdesigns,
            },
            {
                id: 3,
                title: "Caption Writing Samples",
                description:"Diverse multi-platform copy samples ranging from minimalist CTAs to educational storytelling.",
                image:captionWritingImg,
                pdfUrl:captionWritingSample,
            },
            {
                id: 4,
                title: "30 Days Growth Plan",
                description:"Strategic 30-day roadmap utilizing behavioral psychology to engineer repeatable organic brand spikes.",
                image:DaysGrowthImg,
                pdfUrl:GrowthPdf,
            },
        ],
    },
    {
        id: "paid-ads",
        icon: MousePointerClick,
        title: "Paid Ads",
        description:
            "Maximize ROI with targeted PPC campaigns across Google, Facebook, and LinkedIn.",
        gradient: "from-blue-500 to-blue-700",
        projects: [
            {
                id: 1,
                title: "Ad Banners",
                description:"Quietly bold ad banners reframing jewelry as a personal ritual rather than consumer noise.",
                image:AdBannerImg,
                pdfUrl:AdBanner,
            },
            {
                id: 2,
                title: "Ad Copy Variation",
                description:"Strategic search ad copy variations mapped to specific user search intent and triggers.",
                image:AdCopyVarImg,
                pdfUrl:AdCopyVar,
            },
            {
                id: 3,
                title: "Ad Campaign Architecture",
                description:"Multi-layered account architecture mapping specific keyword themes to high-conversion user mindsets.",
                image:AdCampaignArcImg,
                pdfUrl:AdCampaignPdf,
            },
        ],
    },
    {
        id: "content",
        icon: FileText,
        title: "Content Marketing",
        description:
            "Tell your story with strategic content that educates, engages, and converts.",
        gradient: "from-violet-500 to-violet-700",
        projects: [
           {
                id: 1,
                title: "Blog Article ",
                description:"Educational blog articles reframing jewelry as personal expression to drive customer loyalty.",
                image:BlogArticleImg,
                pdfUrl:BlogArticlePdf,
            },
            {
                id: 2,
                title: "Website Landing Page",
                description:"Intent-driven landing page optimization utilizing emotional storytelling and strategic value propositions.",
                image:WebsiteLandingPageImg,
                pdfUrl:WebsiteLandingPage,
            },
            {
                id: 3,
                title: "Email Newsletter Sample",
                description:"Emotionally resonant email sequences focused on brand intimacy, retention, and human-centric storytelling",
                image:EmailNewsletterImg,
                pdfUrl:EmailNewsletterSample,
            },
        ],
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
            quote:
                "Working with this team has been transformative for our business. Our organic traffic increased by 300% in just 6 months!",
            author: "Sarah Johnson",
            position: "CEO, TechCorp",
            image:
                "https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODc0NTAzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
            quote:
                "The ROI from their PPC campaigns exceeded our expectations. Professional, data-driven, and results-focused.",
            author: "Michael Chen",
            position: "Marketing Director, Innovate",
            image:
                "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg3NjgyODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
            quote:
                "Their creative approach to social media marketing helped us double our engagement and build a loyal community.",
            author: "Emily Rodriguez",
            position: "Founder, GrowthLab",
            image:
                "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODgwNjY3NHww&ixlib=rb-4.1.0&q=80&w=1080",
        },
    ],
};

export const certificatesData = [
    {
        icon: Award,
        title: "Google Ads Certified",
        issuer: "Google",
        year: "2025",
        color: "from-blue-500 to-cyan-500",
        image: google,
    },
    {
        icon: BookOpen,
        title: "HubSpot Inbound Marketing",
        issuer: "HubSpot Academy",
        year: "2025",
        color: "from-orange-500 to-red-500",
        image: hubspot,
    },
    {
        icon: TrendingUp,
        title: "Meta Blueprint Certified",
        issuer: "Meta",
        year: "2024",
        color: "from-purple-500 to-pink-500",
        image: "",
    },
    {
        icon: Users,
        title: "LinkedIn Marketing Expert",
        issuer: "LinkedIn",
        year: "2024",
        color: "from-indigo-500 to-blue-600",
        image: "",
    },
];

export const contactData = {
    info: [
        {
            icon: Mail,
            label: "Email",
            value: "agency@neuroworks.online",
            color: "from-purple-500 to-purple-700",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 6398498216",
            color: "from-pink-500 to-pink-700",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Dubai, UAE",
            color: "from-blue-500 to-blue-700",
        },
    ],
    socials: [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "https://www.instagram.com/neuro.works.ai.agency/#", label: "Instagram" },
    ]

};