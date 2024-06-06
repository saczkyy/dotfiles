import enum

from qtile_extras.widget.decorations import PowerLineDecoration

# Decorators
powerlineSlash = {
    "decorations": [
        PowerLineDecoration(path='forward_slash')
    ]
}
powerlineBackSlash = {
    "decorations": [
        PowerLineDecoration(path='back_slash')
    ]
}

class Green_Leaves():
    fg_offwhite = 'd1b297'
    fg = 'f5f5f5'
    bg = '11130E'
    grey = '3e3e3e'

    ### COLORS ###
    class Green():
        light1 = '7f8266' 
        light2 = '6C6F57' 
        light3 = "565C44"
        normal1 = "41492F"
        normal2 = '2D341F'
        dark1 = "181F0E"
        dark2 = '111B07'

    class Brown():
        light1='795548'
        light2='6d4d41'
        light3='61443a'
        normal1='49332b'
        normal2='3d2b24'
        dark1='241a16'
        dark2='18110e'
        dark3='0c0807'

    ### MISC ###
    border = {
        'border_focus':Green.light2,
        "border_normal":Green.dark1,
        "border_width":2,
        'single_border_width':0
    }
    gap = {
        'margin':8,
        'single_margin':0
    }
    separatorKwargs = {
        'foreground':Brown.light3,
    }

    ### LEFT SIDE ###
    menuTextBoxKwargs = {
        'background':None,
        'fontsize':24,
        'foreground':Green.light1,
        'fmt':'',
    }
    quickexitKwargs = {
        'background':None,
        'default_text':'',
        'countdown_format':'',
        'font':"Noto Nerd Font",
        'fontsize':18
    }
    groupboxKwargs = {
        'active':fg_offwhite, #fg
        'inactive':grey,
        'highlight_method':'line',
        'highlight_color':[bg, Green.normal2],
        'this_current_screen_border':Green.light1,
        'this_screen_border':Green.light1,
        'urgent_alert_method':'text',
        'urgent_text':'cc241d',
        'background':None
    }

    windowKwargs = {
        **powerlineBackSlash
    }

    ### RIGHT SIDE ###
    openWeatherKwargs = {
        'background':Brown.dark2,
        'format':'{icon} {temp:1.1f}°C',
        **powerlineBackSlash,
    }
    memoryKwargs = {
        'background':Brown.dark1,
        'measure_mem':'G',
        'format':'{MemUsed:.1f}{mm} / {MemTotal:.1f}{mm}',
        **powerlineBackSlash,
    }
    checkUpdatesKwargs = {
        'background':Brown.normal2,
        'colour_have_updates':fg,
        'colour_no_updates':fg,
        'no_update_string':' 0',
        'restart_indicator':'',
        **powerlineBackSlash,
    }
    essentialsKwargs = {
        'background':Green.normal1,
        **powerlineBackSlash,
    }
    #### oh my god
    hack = {
        'background':Green.normal1,
        **powerlineSlash
    }
    clockKwargs = {
        'background':Green.light3,
        'format':"%A, %H:%M",
        **powerlineSlash,
    }
    layoutKwargs = {
        'background':Green.light2,
        'padding': 4,
        'custom_icon_paths':["/home/saczky/.config/qtile/icons/layouts/green_leaves",], 
    }

