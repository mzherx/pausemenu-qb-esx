import { useMenuData } from "@/stores/data"

export default function () {
	const menuData = useMenuData()

	window.addEventListener("message", ({ data }) => {
		switch (data.action) {
			case "open":
				menuData.setData(data.data)
				menuData.setMenu(true)
				menuData.setLocales(data.data.Locales)
				break

			case "close":
				menuData.setMenu(false)
				break

            default:
                break
        }
	})
}