import { ComponentStyles, CSSRules } from "@microsoft/fast-jss-manager-react";
import { ellipsis } from "@microsoft/fast-jss-utilities";
import {
    chevronDownStyle,
    chevronUpStyle,
    error,
    invalidMessageStyle,
} from "../../../style";
import { SectionValidationClassNameContract } from "./section.validation.props";

const styles: ComponentStyles<SectionValidationClassNameContract, {}> = {
    sectionValidation: {
        overflow: "visible",
        position: "relative",
    },
    sectionValidation_controlRegion: {
        ...invalidMessageStyle,
        border: `1px solid ${error}`,
        padding: "10px",
        margin: "10px 30px 10px 0",
        "margin-right": undefined,
        "border-radius": "2px",
        background: "rgba(255,0,0,0.1)",
    },
    sectionValidation_message: {
        ...ellipsis(),
    },
    sectionValidation_expandTrigger: {
        ...chevronDownStyle,
        "&$sectionValidation_expandTrigger__active": {
            ...chevronUpStyle,
        },
    },
    sectionValidation_expandTrigger__active: {},
    sectionValidation_errorList: {
        margin: "10px 0 5px 0",
        padding: "0",
        "list-style": "inside",
    },
    sectionValidation_errorListItem: {
        ...ellipsis(),
    },
    sectionValidation_errorListItemDetails: {
        ...ellipsis(),
        "font-style": "italic",
    },
};

export default styles;
