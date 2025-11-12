import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{}}
    >
        <Tabs.Screen 
            name='index'
            options={{
                title:"Todos"
            }}
        />

    </Tabs>
  )
}

export default TabsLayout