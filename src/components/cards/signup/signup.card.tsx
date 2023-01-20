import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import RestService from '../../../services/rest.service';
import { EMAIL_VERIFICATION_REGEX, PASSWORD_VERIFICATION_REGEX, USERNAME_VERIFICATION_REGEX } from '../../../utils/verifiers';
import { Card } from '../card/card';
import { ICard } from '../card/card.constants';
import './signup.card.sass';

const SignupCard = (props: ICard) => {
    const { t } = useTranslation();
    const [ username, setUsername ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ message , setAlertMessage ] = useState<string>('');

    const handleSignup = async (event: any) => {
        event.preventDefault();

        // Validation methods
        if (!USERNAME_VERIFICATION_REGEX.test(username)) {
            setAlertMessage(t('card.signup.errors.invalid_username') as string)
            return;
        }

        if (!EMAIL_VERIFICATION_REGEX.test(email)) {
            setAlertMessage(t('card.signup.errors.invalid_email') as string)
            return;
        }

        if (!PASSWORD_VERIFICATION_REGEX.test(password)) {
            setAlertMessage(t('card.signup.errors.invalid_password') as string)
            return;
        }

        try {
            const restService = RestService.getInstance();
            const user = await restService.signup(username, email, password);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Card {...props} title="Signup" closeable>
            <div className='signup-container'>
                <form className='signup-container' onSubmit={handleSignup}>
                    <label>
                        {t('card.signup.username')}
                        <input type="text" value={username} required onChange={v => setUsername(v.target.value) } />
                    </label>
                    <label>
                        {t('card.signup.email')}
                        <input type="email" value={email} required onChange={v => setEmail(v.target.value) } />
                    </label>
                    <label>
                        {t('card.signup.password')}
                        <input type="password" value={password} required onChange={v => setPassword(v.target.value) }  />
                    </label>
                    <input type="submit" value="Signup" />
                </form>
                <span>{message}</span>
            </div>
        </Card>
    )
}

export default SignupCard;