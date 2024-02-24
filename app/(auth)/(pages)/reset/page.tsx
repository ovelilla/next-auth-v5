// Components
import { CardWrapper } from "../../components/card-wrapper/card-wrapper.component";
import { ResetForm } from "./components/form/reset-form.component";
// Constants
import constants from "./constants/reset.constants";

const ResetPage = (): React.ReactElement => (
  <CardWrapper {...{ ...constants.CARD_WRAPPER_PROPS }}>
    <ResetForm />
  </CardWrapper>
);

export default ResetPage;
