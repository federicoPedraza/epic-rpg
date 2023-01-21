import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import RestService from '../../../services/rest.service';
import { AlertSeverity } from '../../alerts/alert.constants';
import { SmallAlert } from '../../alerts/small-alert';
import { Card } from '../card/card';
import { ICard } from '../card/card.constants';
import './login.card.sass';

const LoginCard = (props: ICard) => {
    const { t } = useTranslation();
    const [ username, setUsername ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    
    const [ alertMessage , setAlertMessage ] = useState<any>({message: '', severity: AlertSeverity.INFO});

    const handleLogin = async (event: any) => {
        event.preventDefault();

        try {
            const restService = RestService.getInstance();
            const user = await restService.login(username, password);
            setAlertMessage({message: (t('card.login.successful') as string), severity: AlertSeverity.SUCCESS});
            console.log(user);
        } catch (error) {
            setAlertMessage({message: (t('card.login.errors.invalid_login') as string), severity: AlertSeverity.ERROR});
        }
    }

    return (
        <Card {...props} title={t('card.login.title') as string} closeable>
            <div className='login-container'>
                <form className='login-container' onSubmit={handleLogin}>
                    <label>
                        {t('card.login.username')}
                        <input type="text" value={username} required onChange={v => setUsername(v.target.value) } />
                    </label>
                    <label>
                        {t('card.login.password')}
                        <input type="password" value={password} required onChange={v => setPassword(v.target.value) }  />
                    </label>
                    <input type="submit" value={t('card.login.submit') as string} />
                </form>
                <SmallAlert message={alertMessage.message} severity={alertMessage.severity} />
            </div>
        </Card>
    )
}

export default LoginCard;