// Components
import { CardWrapper } from "../../components/card-wrapper/card-wrapper.component";
// Constants
import constants from "./constants/error.constants";
// Icons
import { LuAlertTriangle } from "react-icons/lu";

const AuthErrorPage = (): React.ReactElement => {
  return (
    <CardWrapper {...constants.CARD_WRAPPER_PROPS}>
      <div className="w-full flex justify-center items-center">
        <LuAlertTriangle size={48} className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default AuthErrorPage;
