import {
  Building2,
  Clock,
  LucideIcon,
  LucideProps,
  Mail,
  MapPin,
  PhoneCall,
  ScrollText,
} from "lucide-react";
import { Separator } from "./ui/separator";
import Logo from "./logo";
import Link from "next/link";

interface Contact {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

interface Social {
  icon: (props: LucideProps) => JSX.Element;
  label: string;
  href: string;
}

const contacts: Contact[] = [
  {
    icon: Building2,
    label: "Company",
    value: "(주)멋쟁이사자처럼 | 대표이사 이두희",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "서울특별시 종로구 종로3길 17 D타워, 16-17층",
    href: "https://maps.app.goo.gl/gzuKYjjx5kNwvsW68",
  },
  {
    icon: ScrollText,
    label: "Certification",
    value:
      "사업자 번호 : 264-88-01106|통신판매업 신고번호 : 2019 - 서울강남 - 00774",
  },
  {
    icon: Mail,
    label: "Email",
    value: "문의처 easylion@likelion.net",
    href: "mailto:easylion@likelion.net",
  },
];

const socials: Social[] = [
  {
    icon: (props: LucideProps) => (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M43.6 21.8C43.6 9.76 33.84 0 21.8 0C9.76 0 0 9.76 0 21.8C0 32.68 7.97 41.7 18.39 43.33V28.1H12.86V21.8H18.39V17C18.39 11.54 21.64 8.52 26.62 8.52C29.01 8.52 31.5 8.95 31.5 8.95V14.31H28.75C26.04 14.31 25.2 15.99 25.2 17.71V21.8H31.25L30.28 28.1H25.2V43.33C35.62 41.69 43.59 32.68 43.59 21.8H43.6Z"
          fill="white"
        />
        <path
          d="M30.28 28.1L31.25 21.8H25.2V17.71C25.2 15.99 26.04 14.31 28.75 14.31H31.5V8.95C31.5 8.95 29.01 8.52 26.62 8.52C21.64 8.52 18.39 11.54 18.39 17V21.8H12.86V28.1H18.39V43.33C19.5 43.5 20.64 43.59 21.8 43.59C22.96 43.59 24.1 43.5 25.21 43.33V28.1H30.29H30.28Z"
          fill="#1B1B1A"
        />
      </svg>
    ),
    label: "LIKELION Facebook",
    href: "https://www.facebook.com/likelion.net",
  },
  {
    icon: (props: LucideProps) => (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M21.87 43.6C33.9098 43.6 43.67 33.8398 43.67 21.8C43.67 9.76019 33.9098 0 21.87 0C9.8302 0 0.0700073 9.76019 0.0700073 21.8C0.0700073 33.8398 9.8302 43.6 21.87 43.6Z"
          fill="white"
        />
        <path
          d="M21.87 10.55C25.53 10.55 25.97 10.56 27.42 10.63C28.76 10.69 29.48 10.91 29.97 11.1C30.61 11.35 31.07 11.65 31.55 12.13C32.03 12.61 32.33 13.07 32.58 13.71C32.77 14.19 32.99 14.92 33.05 16.26C33.12 17.71 33.13 18.14 33.13 21.81C33.13 25.48 33.12 25.91 33.05 27.36C32.99 28.7 32.77 29.42 32.58 29.91C32.33 30.55 32.03 31.01 31.55 31.49C31.07 31.97 30.61 32.27 29.97 32.52C29.49 32.71 28.76 32.93 27.42 32.99C25.97 33.06 25.54 33.07 21.87 33.07C18.2 33.07 17.77 33.06 16.32 32.99C14.98 32.93 14.26 32.71 13.77 32.52C13.13 32.27 12.67 31.97 12.19 31.49C11.71 31.01 11.41 30.55 11.16 29.91C10.97 29.43 10.75 28.7 10.69 27.36C10.62 25.91 10.61 25.48 10.61 21.81C10.61 18.14 10.62 17.71 10.69 16.26C10.75 14.92 10.97 14.2 11.16 13.71C11.41 13.07 11.71 12.61 12.19 12.13C12.67 11.65 13.13 11.35 13.77 11.1C14.25 10.91 14.98 10.69 16.32 10.63C17.77 10.56 18.2 10.55 21.87 10.55ZM21.87 8.08C18.14 8.08 17.68 8.1 16.21 8.16C14.75 8.23 13.75 8.46 12.88 8.8C11.98 9.15 11.21 9.62 10.45 10.38C9.69 11.14 9.22001 11.91 8.87001 12.81C8.53001 13.68 8.30001 14.68 8.23001 16.14C8.16001 17.6 8.15001 18.07 8.15001 21.8C8.15001 25.53 8.17001 25.99 8.23001 27.46C8.30001 28.92 8.53001 29.92 8.87001 30.79C9.22001 31.69 9.69 32.46 10.45 33.22C11.21 33.98 11.98 34.45 12.88 34.8C13.75 35.14 14.75 35.37 16.21 35.44C17.67 35.51 18.14 35.52 21.87 35.52C25.6 35.52 26.06 35.5 27.53 35.44C28.99 35.37 29.99 35.14 30.86 34.8C31.76 34.45 32.53 33.98 33.29 33.22C34.05 32.46 34.52 31.69 34.87 30.79C35.21 29.92 35.44 28.92 35.51 27.46C35.58 26 35.59 25.53 35.59 21.8C35.59 18.07 35.57 17.61 35.51 16.14C35.44 14.68 35.21 13.68 34.87 12.81C34.52 11.91 34.05 11.14 33.29 10.38C32.53 9.62 31.76 9.15 30.86 8.8C29.99 8.46 28.99 8.23 27.53 8.16C26.07 8.09 25.6 8.08 21.87 8.08Z"
          fill="#1B1B1A"
        />
        <path
          d="M21.87 14.75C17.98 14.75 14.82 17.91 14.82 21.8C14.82 25.69 17.98 28.85 21.87 28.85C25.76 28.85 28.92 25.69 28.92 21.8C28.92 17.91 25.76 14.75 21.87 14.75ZM21.87 26.37C19.34 26.37 17.29 24.32 17.29 21.79C17.29 19.26 19.34 17.21 21.87 17.21C24.4 17.21 26.45 19.26 26.45 21.79C26.45 24.32 24.4 26.37 21.87 26.37Z"
          fill="#1B1B1A"
        />
        <path
          d="M29.2 16.12C30.1113 16.12 30.85 15.3813 30.85 14.47C30.85 13.5587 30.1113 12.82 29.2 12.82C28.2887 12.82 27.55 13.5587 27.55 14.47C27.55 15.3813 28.2887 16.12 29.2 16.12Z"
          fill="#1B1B1A"
        />
      </svg>
    ),
    label: "LIKELION Instagram",
    href: "https://www.instagram.com/likelion.official/",
  },
  {
    icon: (props: LucideProps) => (
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M21.95 43.6C33.9898 43.6 43.75 33.8398 43.75 21.8C43.75 9.76019 33.9898 0 21.95 0C9.91021 0 0.150024 9.76019 0.150024 21.8C0.150024 33.8398 9.91021 43.6 21.95 43.6Z"
          fill="white"
        />
        <path
          d="M35.87 14.8C35.54 13.55 34.55 12.56 33.3 12.23C31.03 11.62 21.94 11.62 21.94 11.62C21.94 11.62 12.85 11.62 10.58 12.23C9.33002 12.56 8.34003 13.55 8.01003 14.8C7.40003 17.07 7.40002 21.8 7.40002 21.8C7.40002 21.8 7.40003 26.53 8.01003 28.8C8.34003 30.05 9.33002 31.04 10.58 31.37C12.85 31.98 21.94 31.98 21.94 31.98C21.94 31.98 31.03 31.98 33.3 31.37C34.55 31.04 35.54 30.05 35.87 28.8C36.48 26.53 36.48 21.8 36.48 21.8C36.48 21.8 36.48 17.07 35.87 14.8ZM19.04 26.16V17.44L26.59 21.8L19.04 26.16Z"
          fill="#1B1B1A"
        />
      </svg>
    ),
    label: "LIKELION Youtube",
    href: "https://www.youtube.com/@likelion.official",
  },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container">
        <div className="pb-8 pt-20">
          <div className="space-y-10 text-foreground/80">
            <Logo />

            <ul className="flex flex-col gap-4 font-medium">
              {contacts.map((contact) => (
                <li className="flex gap-4 items-center" key={contact.label}>
                  <contact.icon className="shrink-0 w-5 h-5" />
                  {contact.href ? (
                    <Link href={contact.href} target="_blank">
                      {contact.value}
                    </Link>
                  ) : (
                    <span>{contact.value}</span>
                  )}
                </li>
              ))}
            </ul>

            <ul className="flex items-center gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <Link href={social.href} target="_blank">
                    <social.icon className="w-8 h-8" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator className="my-8" />
          <div>Copyright @ 2023, EASYLION Co., Ltd</div>
        </div>
      </div>
    </footer>
  );
}
