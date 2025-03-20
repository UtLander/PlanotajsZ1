import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Calendar } from "../../components/ui/calendar";
import { Dialog, DialogContent, DialogTitle } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export default function MainView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addEvent = () => {
    if (newEvent.trim() !== "") {
      setEvents([...events, { date: selectedDate, title: newEvent }]);
      setNewEvent("");
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">📅 Mans Plānotājs</h1>
      
      <Card className="w-full max-w-md">
        <CardContent>
          <Calendar selected={selectedDate} onSelect={setSelectedDate} />
          <Button className="mt-4 w-full" onClick={() => setIsDialogOpen(true)}>
            ➕ Pievienot uzdevumu
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogTitle>Pievienot uzdevumu</DialogTitle>
          <Label>Uzdevuma nosaukums</Label>
          <Input
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Ieraksti uzdevumu"
          />
          <Button className="mt-2" onClick={addEvent}>
            ✅ Saglabāt
          </Button>
        </DialogContent>
      </Dialog>

      <div className="mt-6 w-full max-w-md">
        <h2 className="text-xl font-semibold">📝 Uzdevumi</h2>
        {events
          .filter((event) => event.date.toDateString() === selectedDate.toDateString())
          .map((event, index) => (
            <Card key={index} className="mt-2 p-2 bg-blue-100 transition-colors duration-300 hover:bg-blue-200">
              <CardContent>{event.title}</CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
