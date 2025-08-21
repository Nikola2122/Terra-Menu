import {motion} from "framer-motion";

function Item(props){
    return (
        <motion.div
            initial={{opacity: 0, y: -5}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: props.id * 0.2}}

            className={'item'}>
            <motion.div className={'name-desc'}>
                <motion.div className={'name'}>
                    {props.name}
                </motion.div>
                <motion.div className={'desc'}>
                    {props.desc}
                </motion.div>
            </motion.div>
            <motion.div className={'price'}>
                {props.price}
            </motion.div>
        </motion.div>
    )
}

export default Item