// TODO: break "size" values into separate scales for space ('s'), width ('w') and height ('h'), and border-width ('bw')?

// TODO: add variables for all the utilities I have that use a scale (but not negative size/space since I can just put a '-' in front of the positive values)

const CustomProperties = createGlobalStyle`
  :root {
    /* Font Families */
    /* TODO: add these */
    /*--bodyFont: ;
    --headingFont: ;

    /* Font sizes (type scale) */
    --f1: .75rem;
    --f2: .875rem;
    --f3: 1rem;
    --f4: 1.125rem;
    --f5: 1.25rem;
    --f6: 1.5rem;
    --f7: 1.875rem;
    --f8: 2.25rem;
    --f9: 3rem;
    --f10: 3.75rem;
    --f11: 4.5rem;

    /* Font Weights */
    --fw1: 400;
    --fw2: 700;

    /* Line Heights */
    --lh1: 1.2;
    --lh2: 1.5;
    --lh3: 1.7;

    /* Letter Spacings */
    --ls1: -.05em;
    --ls2: .05em;
    --ls3: .1em;
    --ls4: .25em;
 
    /* Space and Size Scale (margin, padding, width, height, border width) */
    --s1: .125rem;
    --s2: .25rem;
    --s3: .5rem;
    --s4: .75rem;
    --s5: 1rem;
    --s6: 1.5rem;
    --s7: 2rem;
    --s8: 3rem;
    --s9: 4rem;
    --s10: 6rem;
    --s11: 8rem;
    --s12: 12rem;
    --s13: 16rem;
    --s14: 24rem;
    --s15: 32rem;
    --s16: 40rem;
    --s17: 48rem;
    --s18: 64rem;
    --s19: 80rem;
    --s20: 96rem;

    /* Border radius */
    --r0: 0;
    --r1: .125rem;
    --r2: .25rem;
    --r3: .375rem;
    --r4: .5rem;
    --r5: .75rem;
    --r6: 1rem;
    --r100: 100%;

    /* Shadows */
    --shadow1: 0 1px 3px hsla(0, 0%, 0%, .2);
    --shadow2: 0 4px 6px hsla(0, 0%, 0%, .2);
    --shadow3: 0 5px 15px hsla(0, 0%, 0%, .2);
    --shadow4: 0 10px 24px hsla(0, 0%, 0%, .2);
    --shadow5: 0 15px 35px hsla(0, 0%, 0%, .2);
    --inset: inset 0 2px 2px hsla(0, 0%, 0%, .1);

    /* Transitions */
    --trans1: all 0.15s ease-in-out;
    --trans2: all 0.2s ease-in-out;
    --trans3: all 0.3s ease-in-out;
    --trans4: all 0.5s ease-in-out;

    /* Cubic beziers (from https://easings.net) */
    --easeInSine: cubic-bezier(0.47, 0, 0.745, 0.715);
    --easeOutSine: cubic-bezier(0.39, 0.575, 0.565, 1);
    --easeInOutSine: cubic-bezier(0.445, 0.05, 0.55, 0.95);

    --easeInQuad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --easeOutQuad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --easeInOutQuad: cubic-bezier(0.455, 0.03, 0.515, 0.955);

    --easeInCubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --easeOutCubic: cubic-bezier(0.215, 0.61, 0.355, 1);
    --easeInOutCubic: cubic-bezier(0.645, 0.045, 0.355, 1);

    --easeInQuart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --easeOutQuart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --easeInOutQuart: cubic-bezier(0.77, 0, 0.175, 1);

    --easeInQuint: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    --easeOutQuint: cubic-bezier(0.23, 1, 0.32, 1);
    --easeInOutQuint: cubic-bezier(0.86, 0, 0.07, 1);

    --easeInExpo: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    --easeOutExpo: cubic-bezier(0.19, 1, 0.22, 1);
    --easeInOutExpo: cubic-bezier(1, 0, 0, 1);

    --easeInCirc: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    --easeOutCirc: cubic-bezier(0.075, 0.82, 0.165, 1);
    --easeInOutCirc: cubic-bezier(0.785, 0.135, 0.15, 0.86);

    --easeInBack: cubic-bezier(0.6, -0.28, 0.735, 0.045);
    --easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --easeInOutBack: cubic-bezier(0.68, -0.55, 0.265, 1.55);
   
    /* Colors */
    --surpriseColor: orange;

    /* Blacks */
    --black01: hsla(0, 0%, 0%, .01);
    --black02: hsla(0, 0%, 0%, .02);
    --black05: hsla(0, 0%, 0%, .05);
    --black10: hsla(0, 0%, 0%, .1);
    --black20: hsla(0, 0%, 0%, .2);
    --black30: hsla(0, 0%, 0%, .3);
    --black40: hsla(0, 0%, 0%, .4);
    --black50: hsla(0, 0%, 0%, .5);
    --black60: hsla(0, 0%, 0%, .6);
    --black70: hsla(0, 0%, 0%, .7);
    --black80: hsla(0, 0%, 0%, .8);
    --black85: hsla(0, 0%, 0%, .85);
    --black90: hsla(0, 0%, 0%, .9);
    --black95: hsla(0, 0%, 0%, .95);

    /* Whites */
    --white01: hsla(0, 0%, 100%, .01);
    --white02: hsla(0, 0%, 100%, .02);
    --white05: hsla(0, 0%, 100%, .05);
    --white10: hsla(0, 0%, 100%, .1);
    --white20: hsla(0, 0%, 100%, .2);
    --white30: hsla(0, 0%, 100%, .3);
    --white40: hsla(0, 0%, 100%, .4);
    --white50: hsla(0, 0%, 100%, .5);
    --white60: hsla(0, 0%, 100%, .6);
    --white70: hsla(0, 0%, 100%, .7);
    --white80: hsla(0, 0%, 100%, .8);
    --white85: hsla(0, 0%, 100%, .85);
    --white90: hsla(0, 0%, 100%, .9);
    --white95: hsla(0, 0%, 100%, .95);

    /* Grays */
    --gray1: hsl(0, 0%, 97%);
    --gray2: hsl(0, 0%, 88%);
    --gray3: hsl(0, 0%, 81%);
    --gray4: hsl(0, 0%, 69%);
    --gray5: hsl(0, 0%, 62%);
    --gray6: hsl(0, 0%, 49%);
    --gray7: hsl(0, 0%, 38%);
    --gray8: hsl(0, 0%, 32%);
    --gray9: hsl(0, 0%, 23%);
    --gray10: hsl(0, 0%, 13%);

    /* Pinks (Vivid) */
    --purple1: hsl(262, 90%, 96%);
    --purple2: hsl(262, 100%, 88%);
    --purple3: hsl(262, 100%, 78%);
    --purple4: hsl(264, 96%, 70%);
    --purple5: hsl(268, 82%, 60%);
    --purple6: hsl(273, 80%, 49%);
    --purple7: hsl(274, 87%, 43%);
    --purple8: hsl(274, 87%, 37%);
    --purple9: hsl(274, 87%, 31%);
    --purple10: hsl(276, 91%, 23%);
    
    /* Pinks */
    --pink1: hsl(329, 100%, 94%);
    --pink2: hsl(330, 87%, 85%);
    --pink3: hsl(330, 77%, 76%);
    --pink4: hsl(330, 72%, 65%);
    --pink5: hsl(330, 66%, 57%);
    --pink6: hsl(330, 63%, 47%);
    --pink7: hsl(330, 68%, 40%);
    --pink8: hsl(330, 70%, 36%);
    --pink9: hsl(331, 74%, 27%);
    --pink10: hsl(330, 79%, 20%);
    
  }
`

import { createGlobalStyle } from 'styled-components'

export default CustomProperties
