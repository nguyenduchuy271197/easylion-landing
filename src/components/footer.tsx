import {
  Building2,
  LucideIcon,
  LucideProps,
  Mail,
  MapPin,
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
    icon: MapPin,
    label: "Address",
    value: "서울특별시 종로구 종로3길 17 D타워, 16-17층",
    href: "https://maps.app.goo.gl/gzuKYjjx5kNwvsW68",
  },
  {
    icon: ScrollText,
    label: "Certification",
    value:
      "사업자 번호 : 264-88-01106 <br/> 통신판매업 신고번호 : 2019 - 서울강남 - 00774",
  },
  {
    icon: Mail,
    label: "Email",
    value: "easylion@likelion.net",
    href: "mailto:easylion@likelion.net",
  },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container">
        <div className="pb-8 pt-20">
          <div className="space-y-10 text-foreground/80">
            <Logo />

            <ul className="flex flex-col gap-4 font-medium text-xs lg:text-base">
              {contacts.map((contact) => (
                <li className="flex gap-4 items-center" key={contact.label}>
                  <contact.icon className="shrink-0 w-4 h-4 lg:w-5 lg:h-5" />
                  {contact.href ? (
                    <Link href={contact.href} target="_blank">
                      {contact.value}
                    </Link>
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: contact.value }} />
                  )}
                </li>
              ))}
            </ul>
          </div>
          <Separator className="my-8" />
          <div className="text-xs lg:text-base">
            Copyright @ 2023, 이지라이언 Co., Ltd
          </div>
        </div>
      </div>
    </footer>
  );
}
