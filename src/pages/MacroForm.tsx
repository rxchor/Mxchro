import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

function MacroForm() {

    return (
        <form>
            <Label htmlFor="holaText">hola</Label>
            <Input id="holaText" type="text" placeholder="hola" />
            <Button onClick={() => alert("hola")}>Click me twin</Button>
        </form>
    );
}

export default MacroForm;