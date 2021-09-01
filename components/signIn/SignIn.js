import { InputStyle, LargeButtonStyle } from "../common/styles/InputStyle";
import {
  FormContainer,
  FormLeft,
  FormRight,
  SignInLeft,
  SignInRight,
} from "../common/styles/FormStyle";

export default function SignIn() {
  return (
    <FormContainer>
      <FormLeft>
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </FormLeft>
      <FormRight>
        <form method="post" action="/signIn">
          <InputStyle>
            <input id="email" type="text" name="email" required />
            <label htmlFor="email">Email</label>
          </InputStyle>
          <InputStyle>
            <input id="password" type="password" name="password" required />
            <label htmlFor="Password">Password</label>
          </InputStyle>
          <LargeButtonStyle>
            <input type="submit" value="Login" />
          </LargeButtonStyle>
        </form>
      </FormRight>
    </FormContainer>
  );
}
