import ContactFooter from '@/components/sections/ContactFooter';

export const metadata = {
  title: 'Contact | Mustafa Uzair',
  description: 'Get in touch for product design, brand strategy, and consulting engagements.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-midnight pt-16">
      <ContactFooter />
    </div>
  );
}
