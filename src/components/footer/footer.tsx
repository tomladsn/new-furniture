import classNames from 'classnames';
import styles from './footer.module.scss';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="/Capture-removebg-preview 2.png"
                className={styles['footer-logo']}
            />
            <p className={styles['footer-txtunderlogo']}>
                Je eigen meubels oet TwenteIn samenwerking met VI interieurs
            </p>
            <div className={styles['div-fr2']}>
                <p className={styles['studio-footer']}>Studio</p>
                <p className={styles['foote-fr2-subtext']}>Bezoek onze winkel</p>
            </div>
            <div className={styles['div-fr3']}>
                <p className={styles['footer-fr3-heading']}>Shopping</p>
                <p className={styles['footer-fr3-subtext']}>
                    Selecteer een van onze vele producten om aan te passen.
                </p>
            </div>
            <div className={styles['div-fr4']}>
                <p className={styles['footer-fr4-heading']}>Payment Methods</p>
                <img src="/payt.png" className={styles['footer-secondimg']} />
            </div>
            <p className={styles['copyright-1']}>2024@ VI Interieur AllRights Reserved</p>
        </div>
    );
};
