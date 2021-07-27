## New Scripts

- `clean:js` - reinstall `node_modules` and remove JavaScript and Watchman cache
- `clean:ios` - `clean:js` + remove all Cocoapods cache and reinstall `pods`
- `clean:android` - `clean:js` + remove all Gradlew cache and all compiled files inside `andoid`
- `clean` - combination of `clean:ios` and `clean:android`


## Git Rules

- `pre-commit` - checks every eslint problem. Also warns all spell mistakes. Pay attention for this step
- `commit-msg` - checks code-style of commit message
- `pre-push` - checks difference between current branch and master. Should be pushed only one commit

## Project Structure

Created default project structure with alias usage. Avaliable folders:

- `assets` - folder that contains all assets for application
  - `png` - images
  - `svg` - icons
  - `font` - fonts
- `components` - folder that contains reusable shared components
- `constants` - folder that contains constants such as `config.ts`, `routes.ts`, etc.
- `screens` - folder that contains entry points to every screen
  - `app` - entry point of application
- `services` - folder that contains service functions
  - `redux` - redux functions
  - `api` - api service
  - `translate` - translate service
- `styles` - folder that contains style-related stuff such as `colors.ts`, `css.ts`, etc.
- `typings` - folder that contains shared typing for whole project. Prefer usage `.d.ts` files

## Libraries

- `@react-navigation/stack`
- `styled-components`
- `react-native-svg`
- `react-native-config`
- `react-native-safe-area-context`