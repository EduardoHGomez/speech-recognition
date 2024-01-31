import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://djpcqsiwrnwqdbbbxqvs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqcGNxc2l3cm53cWRiYmJ4cXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyODE2NTMsImV4cCI6MjAxODg1NzY1M30.2A9dQ_B2wflHjRyoyV_TXlNKgpWDA-OWZbUGdWV4wgg';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;