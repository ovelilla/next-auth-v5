// Components
import { CardWrapper } from "../components/card-wrapper/card-wrapper.component";
import { LoginForm } from "./components/form/login-form.component";
// Constants
import constants from "./constants/login.constants";

const LoginPage = (): React.ReactElement => (
  <CardWrapper {...{ ...constants.CARD_WRAPPER_PROPS }}>
    <LoginForm {...{ ...constants.LOGIN_FORM_PROPS }} />
  </CardWrapper>
);

export default LoginPage;
