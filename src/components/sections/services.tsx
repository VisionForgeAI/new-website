import { Card } from '@/components/ui/card';
import { Bot, Zap, LineChart, ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, tools }: { 
  title: string; 
  description: string; 
  icon: any;
  tools?: { name: string; icon: string; }[];
}) => (
  <Card className="p-6 bg-secondary/50 backdrop-blur border-primary/10 hover:border-primary/20 transition-all duration-300">
    <div className="flex items-center space-x-3 mb-4">
      <div className="p-2 bg-primary/10 rounded-lg">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
    </div>
    <p className="text-muted-foreground mb-6">{description}</p>
    {tools && (
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <div key={index} className="p-2 bg-secondary rounded-lg">
            <img src={tool.icon} alt={tool.name} className="h-6 w-6" />
          </div>
        ))}
      </div>
    )}
  </Card>
);

const Services = () => {
  const services = [
    {
      title: 'Workflow automations',
      description: 'We automate your workflows by connecting your favourite applications. Boosting efficiency and enhancing productivity.',
      icon: Zap,
      tools: [
        { name: 'Framer', icon: '/framer.svg' },
        { name: 'Airtable', icon: '/airtable.svg' },
        { name: 'OpenAI', icon: '/openai.svg' }
      ]
    },
    {
      title: 'Chatbot development',
      description: 'We develop advanced chatbots that are reactive, understand nuances, and are capable of solving extremely complicated queries.',
      icon: Bot
    },
    {
      title: 'Business consulting',
      description: 'Using our expertise, we delve deep into your organisation and consult you on how AI-driven automations could enhance your operations.',
      icon: LineChart
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16">
          Our <span className="text-primary">services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;