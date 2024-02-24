// Components
import { CardWrapper } from "../../components/card-wrapper/card-wrapper.component";
import { RegisterForm } from "./components/form/register-form.component";
// Constants
import constants from "./constants/register.constants";

const RegisterPage = (): React.ReactElement => (
  <CardWrapper {...{ ...constants.CARD_WRAPPER_PROPS }}>
    <RegisterForm />
  </CardWrapper>
);

export default RegisterPage;
