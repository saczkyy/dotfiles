from django import forms

class Liczby(forms.Form):
    pole1 = forms.IntegerField()
    pole2 = forms.IntegerField()

    def __init__(self, *args, **kwargs):
        super(Liczby, self).__init__(*args, **kwargs)
        self.fields['pole1'].label = "Dystans do przejechania w km: "
        self.fields['pole2'].label = "Spalanie samochodu w 1/100km: "

class Dzialania(forms.Form):
    a = forms.IntegerField()
    b = forms.IntegerField()

    def __init__(self, *args, **kwargs)