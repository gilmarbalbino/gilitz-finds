import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SpaceBackground from "@/components/SpaceBackground";
import ClientForm from "@/components/cadcliente/ClientForm";
import ClientList from "@/components/cadcliente/ClientList";
import { useToast } from "@/hooks/use-toast";

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

const STORAGE_KEY = "cadcliente_clients";

const CadCliente = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setClients(JSON.parse(stored));
      } catch {
        console.error("Erro ao carregar clientes do localStorage");
      }
    }
  }, []);

  const saveClients = (newClients: Client[]) => {
    setClients(newClients);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newClients));
  };

  const handleClientAdded = (client: Client) => {
    const newClients = [client, ...clients];
    saveClients(newClients);
    toast({
      title: "Cliente cadastrado!",
      description: `${client.name} foi adicionado com sucesso.`,
    });
  };

  const handleDeleteClient = (id: string) => {
    const client = clients.find((c) => c.id === id);
    const newClients = clients.filter((c) => c.id !== id);
    saveClients(newClients);
    toast({
      title: "Cliente removido",
      description: `${client?.name} foi removido da lista.`,
      variant: "destructive",
    });
  };

  return (
    <main className="min-h-screen">
      <SpaceBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 container mx-auto px-4 py-8"
      >
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Portfólio
            </Button>
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
            Cadastro de Clientes
          </h1>
          <p className="text-muted-foreground">
            Sistema MVP para gerenciamento de clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ClientForm onClientAdded={handleClientAdded} />
          <ClientList clients={clients} onDeleteClient={handleDeleteClient} />
        </div>
      </motion.div>
    </main>
  );
};

export default CadCliente;
