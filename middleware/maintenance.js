export default function ({ redirect, route }) {
    if (route.name != 'maintenance') {
        return redirect('/maintenance')
    }
}