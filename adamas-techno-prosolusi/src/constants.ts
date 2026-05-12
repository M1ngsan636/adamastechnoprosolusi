import { CompanyData } from "./types";

export const COMPANY_DATA: CompanyData = {
  name: "Adamas Techno Prosolusi",
  tagline: "Empowering Businesses through Precision IT Solutions & Seamless Integration",
  about: "Adamas Techno Prosolusi is a forward-thinking IT solutions provider specializing in B2C and B2B integration. We bridge the gap between complex technology and practical business needs, delivering scalable, secure, and intuitive digital ecosystems.",
  mission: "To deliver cutting-edge IT solutions that drive growth and innovation for our clients through technical excellence and strategic integration.",
  vision: "To be the preferred global partner for IT transformation, recognized for our commitment to quality, integrity, and future-ready solutions.",
  services: [
    {
      id: "cloud-integration",
      title: "Cloud Resource Integration",
      description: "Seamlessly connect your legacy systems with modern cloud infrastructure for maximum efficiency.",
      icon: "Cloud"
    },
    {
      id: "cyber-security",
      title: "Enterprise Cybersecurity",
      description: "Protecting your digital assets with advanced threat detection, encryption, and zero-trust architectures.",
      icon: "ShieldAlert"
    },
    {
      id: "it-consulting",
      title: "Strategic IT Consulting",
      description: "Data-driven insights to help you navigate the complex landscape of hardware, software, and networking.",
      icon: "CodeXml"
    },
    {
      id: "managed-services",
      title: "Managed IT Services",
      description: "24/7 monitoring and support to ensure your business operations never skip a beat.",
      icon: "Activity"
    }
  ],
  projects: [
    {
      id: "p1",
      title: "EcoLink Smart Grid",
      category: "IoT / Integration",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      description: "A centralized control system for metropolitan smart energy distribution."
    },
    {
      id: "p2",
      title: "FinShield Core",
      category: "Security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      description: "Next-gen banking security infrastructure for high-volume transactions."
    },
    {
      id: "p3",
      title: "OmniFlow Logistics",
      category: "Cloud Services",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      description: "End-to-end cloud logistics tracking system for global shipping."
    }
  ],
  address: "Ruko Permata Regency Blok D No. 37, Jl. Haji Kelik, Srengseng, Kembangan, Jakarta Barat - 11630",
  coordinates: {
    lat: -6.212,
    lng: 106.758
  }
};
