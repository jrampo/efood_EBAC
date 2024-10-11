import {
  Overlay,
  CardContainer,
  Sidebar,
  Forms,
  FormsFlex,
  Title,
  Buttons,
} from "./styles";

const Checkout = () => (
  <CardContainer>
    <Overlay />
    <Sidebar>
      <Title>Entrega</Title>
      <Forms>
        <label htmlFor="teste">Quem irá receber</label>
        <input type="text" id="teste" />
      </Forms>
      <Forms>
        <label htmlFor="teste2">Endereço</label>
        <input type="text" id="teste2" />
      </Forms>
      <Forms>
        <label htmlFor="teste3">Cidade</label>
        <input type="text" id="teste3" />
      </Forms>

      <FormsFlex>
        <Forms>
          <label htmlFor="teste3">CEP</label>
          <input type="text" id="teste3" />
        </Forms>
        <Forms>
          <label htmlFor="teste3">Número</label>
          <input type="text" id="teste3" />
        </Forms>
      </FormsFlex>

      <Forms>
        <label htmlFor="teste3">Complemento (opcional)</label>
        <input type="text" id="teste3" />
      </Forms>
      <Buttons>
        <button>Continuar com o pagamento</button>
        <button>Voltar para o carrinho</button>
      </Buttons>
    </Sidebar>
  </CardContainer>
);

export default Checkout;
