import logo from '../../assets/images/logo_blue.png'
import {motion} from "framer-motion";

function Nothing() {
    return (
        <motion.div
            className={'menu'}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
        >
            <img id={'logo-png'} src={logo} alt={''}/>
        </motion.div>
    )
}

export default Nothing