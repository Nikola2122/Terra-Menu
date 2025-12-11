import Nothing from "./menus/Nothing";
import Menu from "./menus/Menu";
import DrinkMenu from "./menus/DrinkMenu";
import { createForm } from '@formily/core'
import { FormProvider, FormConsumer, Field } from '@formily/react'
import {
    FormItem,
    FormLayout,
    Input,
    FormButtonGroup,
    Submit,
} from '@formily/antd'

const form = createForm()


function Display(props) {

    return (
        <div>
            {props.whatToShow !== 'Nothing' && props.whatToShow !== 'Drinks' &&
                (
                    <FormProvider form={form}>
                        <FormLayout layout="vertical">
                            <Field
                                name="input"
                                title=""
                                initialValue="Hello world"
                                decorator={[FormItem]}
                                component={[Input]}
                            />
                        </FormLayout>

                        <FormButtonGroup>
                            <Submit onSubmit={() => alert(form.values.input)}>submit</Submit>
                        </FormButtonGroup>
                    </FormProvider>
                )
            }
            {props.whatToShow === 'Nothing' ?
                <Nothing/> : props.whatToShow === 'Drinks' ?
                    <div className={'menu special'}>
                        <DrinkMenu id={1} name={'coffee'}/>
                        <DrinkMenu id={2} name={'nonAlcoholic'}/>
                        <DrinkMenu id={3} name={'alcoholic'}/>
                    </div>
                    :
                    <Menu whatToShow={props.whatToShow}/>
            }
        </div>
    )
}

export default Display