import { useNavigate } from "react-router-dom";

/**
 * withRouter - Higher Order Component which add history feature in components
 * @param {*} Component 
 * @returns 
 */
const withRouter = (Component) => {
    const Wrapper = (props) => {
      let history = useNavigate();
      
      return (
        <Component
          history={history}
          {...props}
          />
      );
    };
    
    return Wrapper;
};

export default withRouter;