import Link from "next/link";

interface UnderlinedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function UnderlinedLink({
  href,
  children,
  className,
  ...props
}: UnderlinedLinkProps) {
  return (
    <Link
      href={href}
      className={`
        relative inline-block
        after:content-[''] 
        after:absolute 
        after:bottom-0 
        after:left-0 
        after:w-full 
        after:h-[2px] 
        after:bg-current 
        after:scale-x-0 
        after:origin-left 
        after:transition-transform 
        after:duration-300 
        after:ease-out
        after:will-change-transform
        hover:after:scale-x-100
        ${className}
      `}
      {...props}
    >
      {children}
    </Link>
  );
}
