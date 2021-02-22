import checkPropTypes from "check-prop-types";

export const findElement = (wrapper, attrValue) =>
  wrapper.find(`[data-test='${attrValue}']`);

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(
    component.propTypes,
    expectedProps,
    "prop",
    component.name
  );
};
