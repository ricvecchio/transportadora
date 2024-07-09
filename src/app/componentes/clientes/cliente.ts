import { Pedido } from "../pedidos/model/pedido";

export interface Cliente {
  idCliente: string;
  nome: string;
  cpfcnpj: string;
  telefone: string;
  celular: string;
  email: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  // pedidos?: Pedido[];
}
