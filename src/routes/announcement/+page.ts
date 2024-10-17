import type { PageLoad } from './$types';
import 'dayjs/locale/th';
import { announcements } from '$lib/mock/announcement';

export const load: PageLoad = async () => {
	return {
		announcements
	};
};