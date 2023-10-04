import { useState } from 'react';
import PageData from '../helper/data/PageData'
import CodeBlock from '../components/CodeBlock';

export default function SignUpForm () {
    const page = PageData.filter((element) => element.path == "/SignUpFormOne")[0]
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    const handleSubmit = (e) => {
        setFirstNameError("");
        setLastNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
        e.preventDefault();
        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const confirmPassword = e.target.elements.confirmPassword.value;
        if (firstName.length == 0) setFirstNameError("First name cannot be empty");
        if (lastName.length == 0) setLastNameError("Last name cannot be empty");
        if (!emailRegex.test(email)) setEmailError("Invalid email address");
        if (password.length < 8) setPasswordError("Password must be greater than 7 characters");
        if (password != confirmPassword) setConfirmPasswordError("Passwords do not match");
        
        if (firstNameError.length == 0 && lastNameError.length == 0 && emailError.length == 0 &&
            passwordError.length == 0 && confirmPasswordError.length == 0) {
            console.log('Form submitted successfully');
        }
    };

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap mb-10'>
                <h2 className='w-full text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900
                 dark:text-white'>
                    {page.name}
                </h2>
                <p className='mt-5 text-slate-500'>Challenge: {page.description}</p>
            </div>
            <div className='w-full flex flex-wrap'>
                <form onSubmit={handleSubmit} className='w-1/2 bg-white shadow-md mx-auto rounded px-8 pt-6 pb-8 mb-10'>
                    <input
                        data-testid="first-name-id"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p data-testid="first-name-error-id" className="text-red-600 mb-6">
                        { firstNameError.length > 0 ? firstNameError : ""}
                    </p>
                    <input
                        data-testid="last-name-id"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p data-testid="last-name-error-id" className="text-red-600 mb-6">
                        { lastNameError.length > 0 ? lastNameError : ""}
                    </p>
                    <input
                        data-testid="email-id"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p data-testid="email-error-id" className="text-red-600 mb-6">
                        { emailError.length > 0 ? emailError : ""}
                    </p>
                    <input
                        data-testid="password-id"
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p data-testid="password-error-id" className="text-red-600 mb-6">
                        { passwordError.length > 0 ? passwordError : ""}
                    </p>
                    <input
                        data-testid="confirm-password-id"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p data-testid="confirm-password-error-id" className="text-red-600 mb-6">
                        { confirmPasswordError.length > 0 ? confirmPasswordError : ""}
                    </p>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white
                     font-bold py-2 px-4 rounded m-2">Sign Up</button>
                </form>
            </div>
            <CodeBlock code={code} />
        </div>
  );
};

const code = `
import { useState } from 'react';

export default function SignUpForm () {
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    const handleSubmit = (e) => {
        setFirstNameError("");
        setLastNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
        e.preventDefault();
        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const confirmPassword = e.target.elements.confirmPassword.value;
        if (firstName.length == 0) setFirstNameError("First name cannot be empty");
        if (lastName.length == 0) setLastNameError("Last name cannot be empty");
        if (!emailRegex.test(email)) setEmailError("Invalid email address");
        if (password.length < 8) setPasswordError("Password must be greater than 7 characters");
        if (password != confirmPassword) setConfirmPasswordError("Passwords do not match");
        
        if (firstNameError.length == 0 && lastNameError.length == 0 && emailError.length == 0 &&
            passwordError.length == 0 && confirmPasswordError.length == 0) {
            console.log('Form submitted successfully');
        }
    };

    return (
        <div className='w-full flex flex-wrap'>
            <div className='w-full flex flex-wrap'>
                <form onSubmit={handleSubmit} className=' w-1/2 bg-white shadow-md mx-auto rounded px-8 pt-6 pb-8 mb-10'>
                    <input
                        data-testid="first-name-id"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p data-testid="first-name-error-id" className="text-red-600 mb-6">
                        { firstNameError.length > 0 ? firstNameError : ""}
                    </p>
                    <input
                        data-testid="last-name-id"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p data-testid="last-name-error-id" className="text-red-600 mb-6">
                        { lastNameError.length > 0 ? lastNameError : ""}
                    </p>
                    <input
                        data-testid="email-id"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p data-testid="email-error-id" className="text-red-600 mb-6">
                        { emailError.length > 0 ? emailError : ""}
                    </p>
                    <input
                        data-testid="password-id"
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p data-testid="password-error-id" className="text-red-600 mb-6">
                        { passwordError.length > 0 ? passwordError : ""}
                    </p>
                    <input
                        data-testid="confirm-password-id"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                         leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <p data-testid="confirm-password-error-id" className="text-red-600 mb-6">
                        { confirmPasswordError.length > 0 ? confirmPasswordError : ""}
                    </p>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white
                     font-bold py-2 px-4 rounded m-2" >Sign Up</button>
                </form>
            </div>
        </div>
  );
};
`