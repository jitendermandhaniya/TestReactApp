import { InputStyle, LargeButtonStyle } from "../common/styles/InputStyle";
import {
  FormContainer,
  FormLeft,
  FormRight,
  SignInLeft,
  SignInRight,
} from "../common/styles/FormStyle";

export default function Register() {
  return (
    <FormContainer>
      <FormLeft>
        <h2>Signup</h2>
        <p>We don not share your personal details with anyone.</p>
      </FormLeft>
      <FormRight>
        <form method="post" action="/signIn">
          <InputStyle>
            <input id="fisrtName" type="text" name="fisrtName" required />
            <label htmlFor="fisrtName">First Name</label>
          </InputStyle>
          <InputStyle>
            <input id="lastName" type="text" name="lastName" required />
            <label htmlFor="lastName">Last Name</label>
          </InputStyle>
          <InputStyle>
            <input id="email" type="text" name="email" required />
            <label htmlFor="Email">Email</label>
          </InputStyle>
          <InputStyle>
            <input id="password" type="password" name="password" required />
            <label htmlFor="Password">Password</label>
          </InputStyle>
          <InputStyle>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              required
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </InputStyle>
          <LargeButtonStyle>
            <input type="submit" value="Signup" />
          </LargeButtonStyle>
        </form>
      </FormRight>
    </FormContainer>
  );
}
