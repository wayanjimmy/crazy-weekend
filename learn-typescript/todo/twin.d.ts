import "twin.macro";
import styledComponent from "@emotion/styled";
import { css as cssProperty } from "@emotion/core";

declare module "twin.macro" {
	const css: typeof cssProperty;
	const styled: typeof styledComponent;
}
