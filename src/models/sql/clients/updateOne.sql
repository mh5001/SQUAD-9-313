UPDATE public.clients
SET firstname = ${ firstname },
	surname = ${ surname }
WHERE id = ${ clientId };