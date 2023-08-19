from os import system


def printf(print_string, print_type='default', end=''):
    warning = '\033[93m'
    default = '\033[0m'
    danger = '\033[91m'
    success = '\033[92m'

    if (print_type == 'warning'):
        print(warning + print_string + default)
    elif (print_type == 'danger'):
        print(danger + print_string + default)
    elif (print_type == 'success'):
        print(success + print_string + default)
    else:
        print(print_string)


def create_react_component(ComponentName, FrameworkExtension, StyleExtension):
    print("")
    # ComponentName = ComponentName.capitalize()

    try:
        with open(f'{ComponentName}/{ComponentName}.{FrameworkExtension}', 'w') as f:
            printf(
                f"-> Creating ./{ComponentName}/{ComponentName}.{FrameworkExtension}", 'warning')
            f.write(f'''import {"styles from " if (StyleExtension == "module.css" or StyleExtension == 'module.scss') else ""}"./{ComponentName}.{StyleExtension}";
         

const {ComponentName} = () => {"{"}
  return (
    <div className={ f'{"{" + f"styles.{ComponentName}" + "}"}' if (StyleExtension == "module.css" or StyleExtension == 'module.scss') else f'"{ComponentName}"'}>
        <div>{ComponentName}</div>
    </div>
  );
{"};"}
            

export default {ComponentName};''')

            printf(
                f"-> Created ./{ComponentName}/{ComponentName}.{FrameworkExtension} Successfully", 'success')

        with open(f'{ComponentName}/{ComponentName}.{StyleExtension}', 'w') as f:
            printf(
                f"-> Creating ./{ComponentName}/{ComponentName}.{StyleExtension}", 'warning')
            f.write(f'''.{ComponentName} {'{'}

{'}'}''')
            printf(
                f"-> Created ./{ComponentName}/{ComponentName}.{StyleExtension} Successfully", 'success')
        printf(f"\nCreated Component {ComponentName} Successfully", 'success')
    except FileNotFoundError:
        printf(
            f"-> Folder ./{ComponentName} not found", 'danger')
        printf(
            f"-> Creating Folder ./{ComponentName}", 'warning')
        system(f'mkdir {ComponentName}')
        printf(
            f"-> Created Folder ./{ComponentName} Successfully", 'success')
        create_react_component(
            ComponentName, FrameworkExtension, StyleExtension)


print("Press Ctrl + C to exit\n")
FrameworkExtension = input("Enter a FrameworkExtension(js/ts/jsx/tsx): ")
StyleExtension = input("Enter a StyleExtension(css/scss): ")

while True:
    print('-'*50)
    create_react_component(input("Enter Component Name: "),
                           FrameworkExtension, StyleExtension)
    print("")
