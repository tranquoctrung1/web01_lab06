function HighLight(control, flag)
{
    switch (flag)
    {
        case 1:
            control.className= "onFocus";
            break;
        case 2:
            control.className = "normal";
            break;
        case 3:
            control.className = "onMouseOver";
            break;
    }
}