// Components
import { CardWrapper } from "../../components/card-wrapper/card-wrapper.component";
import { NewPasswordForm } from "./components/form/new-password-form.component";
// Constants
import constants from "./constants/new-password.constants";

const NewPasswordPage = (): React.ReactElement => (
  <CardWrapper {...{ ...constants.CARD_WRAPPER_PROPS }}>
    <NewPasswordForm />
  </CardWrapper>
);

export default NewPasswordPage;
